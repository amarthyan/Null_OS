/**
 * NullOS App Reviews & Rating Subsystem
 * Manages star ratings, community reviews, helpful voting, sorting, user submissions,
 * editing, deletion, and local persistence.
 */

import { UselessnessEngine } from './uselessnessEngine.js';
import { AchievementEngine } from './achievementEngine.js';

const DEFAULT_REVIEWS = {
  rockSimulator: [
    {
      id: 'rev-r1',
      user: 'Marcus Thorne',
      stars: 5,
      date: '02-09-2026',
      title: 'Flawless rock physics',
      text: 'The rock has not moved once. Excellent stability. Left it open over the weekend and found it in the exact same state.',
      helpful: 84
    },
    {
      id: 'rev-r2',
      user: 'Sarah M.',
      stars: 5,
      date: '28-08-2026',
      title: 'Saved my afternoon',
      text: 'I stared at it for 20 minutes instead of doing my quarterly taxes. Peak software engineering.',
      helpful: 52
    },
    {
      id: 'rev-r3',
      user: 'David K.',
      stars: 4,
      date: '15-08-2026',
      title: 'Good rock',
      text: 'Waste of 742 MB. Would recommend.',
      helpful: 31
    }
  ],
  airManager: [
    {
      id: 'rev-a1',
      user: 'Taylor N.',
      stars: 5,
      date: '01-09-2026',
      title: 'Managed my air perfectly',
      text: 'Managed my room air in 2 seconds. Still breathing. No measurable change detected.',
      helpful: 42
    },
    {
      id: 'rev-a2',
      user: 'Julian Vance',
      stars: 4,
      date: '14-08-2026',
      title: 'I installed this because I thought it would be useful.',
      text: 'It is not useful at all. 5 stars.',
      helpful: 19
    }
  ],
  waitingApp: [
    {
      id: 'rev-w1',
      user: 'Morgan W.',
      stars: 5,
      date: '04-09-2026',
      title: 'Waited 3 hours',
      text: 'Waited 3 hours. Best 3 hours wasted. Nothing arrived.',
      helpful: 97
    },
    {
      id: 'rev-w2',
      user: 'Sam R.',
      stars: 5,
      date: '22-08-2026',
      title: 'True to advertising',
      text: 'Nothing happened. Exactly as advertised.',
      helpful: 63
    }
  ],
  mouseTester: [
    {
      id: 'rev-m1',
      user: 'Elena R.',
      stars: 5,
      date: '05-09-2026',
      title: 'Confirmed existence',
      text: 'Confirmed: my mouse does indeed exist. Will test again in 5 minutes.',
      helpful: 35
    }
  ]
};

class ReviewSystem {
  constructor() {
    this.storageKey = 'nullos_app_reviews_v2';
    this.userReviewsKey = 'nullos_user_own_reviews_v2';
    this.helpfulVotesKey = 'nullos_helpful_votes_v2';
    this.listeners = new Set();
    this.reviews = this.loadReviews();
    this.userReviews = this.loadUserReviews();
    this.helpfulVotes = this.loadHelpfulVotes();
  }

  loadReviews() {
    try {
      const saved = localStorage.getItem(this.storageKey);
      if (saved) {
        return { ...DEFAULT_REVIEWS, ...JSON.parse(saved) };
      }
    } catch (e) {}
    return { ...DEFAULT_REVIEWS };
  }

  saveReviews() {
    try {
      localStorage.setItem(this.storageKey, JSON.stringify(this.reviews));
    } catch (e) {}
  }

  loadUserReviews() {
    try {
      const saved = localStorage.getItem(this.userReviewsKey);
      if (saved) return JSON.parse(saved);
    } catch (e) {}
    return {};
  }

  saveUserReviews() {
    try {
      localStorage.setItem(this.userReviewsKey, JSON.stringify(this.userReviews));
    } catch (e) {}
  }

  loadHelpfulVotes() {
    try {
      const saved = localStorage.getItem(this.helpfulVotesKey);
      if (saved) return new Set(JSON.parse(saved));
    } catch (e) {}
    return new Set();
  }

  saveHelpfulVotes() {
    try {
      localStorage.setItem(this.helpfulVotesKey, JSON.stringify([...this.helpfulVotes]));
    } catch (e) {}
  }

  getReviews(appId, sortBy = 'helpful') {
    const list = [...(this.reviews[appId] || [])];

    if (sortBy === 'helpful') {
      list.sort((a, b) => (b.helpful || 0) - (a.helpful || 0));
    } else if (sortBy === 'newest') {
      list.sort((a, b) => b.id.localeCompare(a.id));
    } else if (sortBy === 'highest') {
      list.sort((a, b) => b.stars - a.stars);
    } else if (sortBy === 'lowest') {
      list.sort((a, b) => a.stars - b.stars);
    }

    return list;
  }

  getAppStats(appId, baseRating = 4.8) {
    const list = this.reviews[appId] || [];
    if (list.length === 0) {
      return { rating: baseRating, count: 12 };
    }
    const sum = list.reduce((acc, r) => acc + r.stars, 0);
    const avg = Number((sum / list.length).toFixed(1));
    return { rating: avg, count: list.length };
  }

  getUserReview(appId) {
    return this.userReviews[appId] || null;
  }

  addOrUpdateUserReview(appId, { stars, title, text }) {
    const now = new Date();
    const dateStr = `${String(now.getDate()).padStart(2, '0')}-${String(now.getMonth() + 1).padStart(2, '0')}-${now.getFullYear()}`;

    if (!this.reviews[appId]) {
      this.reviews[appId] = [];
    }

    const existingUserReview = this.userReviews[appId];
    if (existingUserReview) {
      // Update in catalog
      const revIndex = this.reviews[appId].findIndex(r => r.id === existingUserReview.id);
      if (revIndex !== -1) {
        this.reviews[appId][revIndex] = {
          ...this.reviews[appId][revIndex],
          stars,
          title,
          text,
          date: dateStr
        };
      }
      this.userReviews[appId] = this.reviews[appId][revIndex];
    } else {
      // Create new review
      const newRev = {
        id: `user-${Date.now()}`,
        user: 'Aizen (You)',
        stars,
        date: dateStr,
        title: title || 'Honest thoughts',
        text,
        helpful: 0,
        isOwn: true
      };
      this.reviews[appId].unshift(newRev);
      this.userReviews[appId] = newRev;

      UselessnessEngine.recordReview();
      AchievementEngine.unlock('certified-critic');
    }

    this.saveReviews();
    this.saveUserReviews();
    this.notify();
  }

  deleteUserReview(appId) {
    const userRev = this.userReviews[appId];
    if (!userRev) return;

    if (this.reviews[appId]) {
      this.reviews[appId] = this.reviews[appId].filter(r => r.id !== userRev.id);
    }
    delete this.userReviews[appId];

    this.saveReviews();
    this.saveUserReviews();
    this.notify();
  }

  voteHelpful(appId, reviewId) {
    if (this.helpfulVotes.has(reviewId)) return false;

    const list = this.reviews[appId];
    if (!list) return false;

    const rev = list.find(r => r.id === reviewId);
    if (!rev) return false;

    rev.helpful = (rev.helpful || 0) + 1;
    this.helpfulVotes.add(reviewId);

    this.saveReviews();
    this.saveHelpfulVotes();
    this.notify();
    return true;
  }

  hasVotedHelpful(reviewId) {
    return this.helpfulVotes.has(reviewId);
  }

  subscribe(listener) {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  }

  notify() {
    this.listeners.forEach(cb => {
      try { cb(); } catch (e) {}
    });
  }
}

export const ReviewManager = new ReviewSystem();

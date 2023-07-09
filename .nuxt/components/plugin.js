import Vue from 'vue'
import { wrapFunctional } from './utils'

const components = {
  GithubCalendar: () => import('../..\\components\\home\\GithubCalendar.vue' /* webpackChunkName: "components/github-calendar" */).then(c => wrapFunctional(c.default || c)),
  HeroSection: () => import('../..\\components\\home\\HeroSection.vue' /* webpackChunkName: "components/hero-section" */).then(c => wrapFunctional(c.default || c)),
  RecentBlog: () => import('../..\\components\\home\\RecentBlog.vue' /* webpackChunkName: "components/recent-blog" */).then(c => wrapFunctional(c.default || c)),
  Recommendations: () => import('../..\\components\\home\\Recommendations.vue' /* webpackChunkName: "components/recommendations" */).then(c => wrapFunctional(c.default || c)),
  TheLogo: () => import('../..\\components\\logos\\TheLogo.vue' /* webpackChunkName: "components/the-logo" */).then(c => wrapFunctional(c.default || c)),
  BlogCard: () => import('../..\\components\\blog\\BlogCard.vue' /* webpackChunkName: "components/blog-card" */).then(c => wrapFunctional(c.default || c)),
  ProjectCard: () => import('../..\\components\\projects\\ProjectCard.vue' /* webpackChunkName: "components/project-card" */).then(c => wrapFunctional(c.default || c)),
  Comment: () => import('../..\\components\\Comment.vue' /* webpackChunkName: "components/comment" */).then(c => wrapFunctional(c.default || c)),
  CommentInput: () => import('../..\\components\\CommentInput.vue' /* webpackChunkName: "components/comment-input" */).then(c => wrapFunctional(c.default || c)),
  Like: () => import('../..\\components\\Like.vue' /* webpackChunkName: "components/like" */).then(c => wrapFunctional(c.default || c)),
  PdfViewer: () => import('../..\\components\\PdfViewer.vue' /* webpackChunkName: "components/pdf-viewer" */).then(c => wrapFunctional(c.default || c)),
  TheFooter: () => import('../..\\components\\TheFooter.vue' /* webpackChunkName: "components/the-footer" */).then(c => wrapFunctional(c.default || c)),
  TheNavBar: () => import('../..\\components\\TheNavBar.vue' /* webpackChunkName: "components/the-nav-bar" */).then(c => wrapFunctional(c.default || c)),
  UserAvatar: () => import('../..\\components\\UserAvatar.vue' /* webpackChunkName: "components/user-avatar" */).then(c => wrapFunctional(c.default || c))
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}

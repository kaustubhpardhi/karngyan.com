import { wrapFunctional } from './utils'

export { default as GithubCalendar } from '../..\\components\\home\\GithubCalendar.vue'
export { default as HeroSection } from '../..\\components\\home\\HeroSection.vue'
export { default as RecentBlog } from '../..\\components\\home\\RecentBlog.vue'
export { default as Recommendations } from '../..\\components\\home\\Recommendations.vue'
export { default as TheLogo } from '../..\\components\\logos\\TheLogo.vue'
export { default as BlogCard } from '../..\\components\\blog\\BlogCard.vue'
export { default as ProjectCard } from '../..\\components\\projects\\ProjectCard.vue'
export { default as Comment } from '../..\\components\\Comment.vue'
export { default as CommentInput } from '../..\\components\\CommentInput.vue'
export { default as Like } from '../..\\components\\Like.vue'
export { default as PdfViewer } from '../..\\components\\PdfViewer.vue'
export { default as TheFooter } from '../..\\components\\TheFooter.vue'
export { default as TheNavBar } from '../..\\components\\TheNavBar.vue'
export { default as UserAvatar } from '../..\\components\\UserAvatar.vue'

export const LazyGithubCalendar = import('../..\\components\\home\\GithubCalendar.vue' /* webpackChunkName: "components/github-calendar" */).then(c => wrapFunctional(c.default || c))
export const LazyHeroSection = import('../..\\components\\home\\HeroSection.vue' /* webpackChunkName: "components/hero-section" */).then(c => wrapFunctional(c.default || c))
export const LazyRecentBlog = import('../..\\components\\home\\RecentBlog.vue' /* webpackChunkName: "components/recent-blog" */).then(c => wrapFunctional(c.default || c))
export const LazyRecommendations = import('../..\\components\\home\\Recommendations.vue' /* webpackChunkName: "components/recommendations" */).then(c => wrapFunctional(c.default || c))
export const LazyTheLogo = import('../..\\components\\logos\\TheLogo.vue' /* webpackChunkName: "components/the-logo" */).then(c => wrapFunctional(c.default || c))
export const LazyBlogCard = import('../..\\components\\blog\\BlogCard.vue' /* webpackChunkName: "components/blog-card" */).then(c => wrapFunctional(c.default || c))
export const LazyProjectCard = import('../..\\components\\projects\\ProjectCard.vue' /* webpackChunkName: "components/project-card" */).then(c => wrapFunctional(c.default || c))
export const LazyComment = import('../..\\components\\Comment.vue' /* webpackChunkName: "components/comment" */).then(c => wrapFunctional(c.default || c))
export const LazyCommentInput = import('../..\\components\\CommentInput.vue' /* webpackChunkName: "components/comment-input" */).then(c => wrapFunctional(c.default || c))
export const LazyLike = import('../..\\components\\Like.vue' /* webpackChunkName: "components/like" */).then(c => wrapFunctional(c.default || c))
export const LazyPdfViewer = import('../..\\components\\PdfViewer.vue' /* webpackChunkName: "components/pdf-viewer" */).then(c => wrapFunctional(c.default || c))
export const LazyTheFooter = import('../..\\components\\TheFooter.vue' /* webpackChunkName: "components/the-footer" */).then(c => wrapFunctional(c.default || c))
export const LazyTheNavBar = import('../..\\components\\TheNavBar.vue' /* webpackChunkName: "components/the-nav-bar" */).then(c => wrapFunctional(c.default || c))
export const LazyUserAvatar = import('../..\\components\\UserAvatar.vue' /* webpackChunkName: "components/user-avatar" */).then(c => wrapFunctional(c.default || c))

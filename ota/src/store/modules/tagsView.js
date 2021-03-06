/*
 * @Author: FT.FE.Bolin
 * @Date: 2018-04-11 17:09:19
 * @Last Modified by: FT.FE.Bolin
 * @Last Modified time: 2018-09-20 11:50:36
 */

import Session from '@/utils/session'
const tagsView = {
  state: {
    visitedViews: Session.get('visitedViews') || [],
    cachedViews: Session.get('cachedViews') || []
  },
  mutations: {
    ADD_VISITED_VIEWS: (state, view) => {
      if (state.visitedViews.some(v => v.path === view.path)) return
      state.visitedViews.push({
        name: view.name,
        path: view.path,
        title: view.meta.title || 'no-name',
        isHomePage: view.meta.isHomePage || false
      })
      Session.set('visitedViews', state.visitedViews)
      // noCache 不缓存
      if (!view.meta.noCache) {
        state.cachedViews.push(view.name)
        Session.set('cachedViews', state.cachedViews)
      }
    },
    DEL_VISITED_VIEWS: (state, view) => {
      for (const [i, v] of state.visitedViews.entries()) {
        if (v.path === view.path) {
          state.visitedViews.splice(i, 1)
          Session.removeItem('visitedViews', i)
          break
        }
      }
      for (const i of state.cachedViews) {
        if (i === view.name) {
          const index = state.cachedViews.indexOf(i)
          Session.removeItem('cachedViews', index)
          state.cachedViews.splice(index, 1)
          break
        }
      }
    },
    DEL_OTHERS_VIEWS: (state, view) => {
      for (const [i, v] of state.visitedViews.entries()) {
        if (v.path === view.path) {
          state.visitedViews = state.visitedViews.slice(i, i + 1)
          Session.set('visitedViews', state.visitedViews)
          break
        }
      }
      for (const i of state.cachedViews) {
        if (i === view.name) {
          const index = state.cachedViews.indexOf(i)
          state.cachedViews = state.cachedViews.slice(index, i + 1)
          Session.set('cachedViews', state.cachedViews)
          break
        }
      }
    },
    DEL_ALL_VIEWS: (state) => {
      state.visitedViews = []
      state.cachedViews = []
      Session.set('visitedViews', state.visitedViews)
      Session.set('cachedViews', state.cachedViews)
    }
  },
  actions: {
    addVisitedViews ({ commit }, view) {
      commit('ADD_VISITED_VIEWS', view)
    },
    delVisitedViews ({ commit, state }, view) {
      return new Promise((resolve) => {
        commit('DEL_VISITED_VIEWS', view)
        resolve([...state.visitedViews])
      })
    },
    delOthersViews ({ commit, state }, view) {
      return new Promise((resolve) => {
        commit('DEL_OTHERS_VIEWS', view)
        resolve([...state.visitedViews])
      })
    },
    delAllViews ({ commit, state }) {
      return new Promise((resolve) => {
        commit('DEL_ALL_VIEWS')
        resolve([...state.visitedViews])
      })
    }
  }
}

export default tagsView

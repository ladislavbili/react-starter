import {FILTERS_RECEIVED, REQUEST_FILTERS, TOGGLE_SIDEBAR, SIDEBAR_IS_MINIFIED, PROJECTS_RECEIVED,OPTIONS_RECEIVED,REQUEST_PROJECTS}
from '../constants';

export function requestFilters() {
    return {
        type: REQUEST_FILTERS
    }
}
export function requestProjects() {
    return {
        type: REQUEST_PROJECTS
    }
}

export function filtersReceived(data) {
    return {
        type: FILTERS_RECEIVED,
        data
    }
}

export function projectsReceived(data) {
    return {
        type: PROJECTS_RECEIVED,
        data
    }
}

export function toggleSidebar(data) {
    return {
        type: TOGGLE_SIDEBAR,
        data: data,
        storage: SIDEBAR_IS_MINIFIED

    }
}

export function optionsReceived(data) {
    return {
        type: OPTIONS_RECEIVED,
        data
    }
}
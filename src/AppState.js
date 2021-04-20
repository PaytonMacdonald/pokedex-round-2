import { reactive } from 'vue'
// eslint-disable-next-line no-unused-vars
import Value from './models/Value'

export const AppState = reactive({

    /** @type {Value[]} */
    resultsValue: [], // for searches

    /** @type {Value} */
    activeValue: null // for draw
})

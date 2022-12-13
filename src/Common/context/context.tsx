import {createContext} from 'react'

import stores from '../../Auth/stores'

export const ObjContext = createContext({...stores, searchValues: [], screenSizeView: null })
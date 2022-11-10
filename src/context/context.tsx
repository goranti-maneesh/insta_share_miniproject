import {createContext, useState} from 'react'

import stores from '../stores'

export const ObjContext = createContext({...stores, searchValues: [], screenSizeView: null })
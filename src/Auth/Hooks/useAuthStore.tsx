import AuthStore from '../stores/AuthStore/index'

// const authStoreHook = new AuthStore()

const useAuthStore = () => {
    const authStoreHook = AuthStore

    return authStoreHook
}

export default useAuthStore
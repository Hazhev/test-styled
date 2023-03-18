import {types} from 'mobx-state-tree';
import createPersistentStore from 'mst-persistent-store';

const TokenStore = types.model('TokenStore', {
    refresh: types.optional(types.string, ''),
    access: types.optional(types.string, '')
})

const UserStore = types.model('UserStore', {
    role: types.optional(types.string, ''),
    token: types.optional(TokenStore, {}),
})
.actions((self) => ({
    addString() {
        self.role = 'visitor';
        self.token.refresh = 'yes';
        self.token.access = 'good';
    },
    
}))

const RootStore = types.model('RootStore', {
    user: types.optional(UserStore, {}),
})



export const [PersistentStoreProvider, usePersistentStore] = createPersistentStore(
    RootStore, {}, {}, {
        logging: false,
        writeDelay: 100,
      }
)

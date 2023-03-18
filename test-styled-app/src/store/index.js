import { types } from 'mobx-state-tree';
import createPersistentStore from 'mst-persistent-store';

const TokenStore = types.model('TokenStore', {
    refresh: types.optional(types.string, ''),
    access: types.optional(types.string, '')
})

const UserStore = types.model('UserStore', {
    role: types.optional(types.boolean, false),
    token: types.optional(TokenStore, {}),
})
    .actions((self) => ({
        addString() {
            self.role = true;
            self.token.access = 'yes';
            self.token.refresh = 'yes';
        },
        removeAll() {
            self.role = false;
            self.token.refresh = '';
            self.token.access = '';
        }


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

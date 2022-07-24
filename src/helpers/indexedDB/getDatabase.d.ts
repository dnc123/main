export declare type IDBUpdateHandler = (database: IDBDatabase) => Promise<void>;
export declare type IDBSeedHandler = () => Promise<void>;
export default function (IDBUpdateHandler?: IDBUpdateHandler, IDBSeedHandler?: IDBSeedHandler): Promise<IDBDatabase>;

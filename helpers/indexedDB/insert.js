var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import getTable from './getTable';
import getDatabase from './getDatabase';
import handleIndexedDBRequest from './handleIndexedDBRequest';
export default function (tableName, dataToInsert) {
    return __awaiter(this, void 0, void 0, function* () {
        // if (!dataToInsert.createdAt) {
        // 	dataToInsert.createdAt = +new Date();
        // }
        return handleIndexedDBRequest(getTable(yield getDatabase(), tableName).add(dataToInsert));
    });
}

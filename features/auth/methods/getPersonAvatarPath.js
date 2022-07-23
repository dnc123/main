"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DEFAULT_PERSON_AVATAR_PATH = "images/base/avatar--default--64.png";
function default_1(personID) {
    return personID ? "images/avatars/" + personID + ".jpg" : DEFAULT_PERSON_AVATAR_PATH;
}
exports.default = default_1;
;

const DEFAULT_PERSON_AVATAR_PATH = `images/base/avatar--default--64.png`;
export default function (personID) {
    return personID ? `images/avatars/${personID}.jpg` : DEFAULT_PERSON_AVATAR_PATH;
}
;

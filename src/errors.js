"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorInvalidEmailFormat = exports.errorRemindersLimitReached = exports.errorUnableToFetchTripDestinationRiskStatistics = exports.errorTripChecklistItemsCountLimitReached = exports.errorTripChecklistCountLimitReached = exports.errorTripChecklistNameAlreadyExists = exports.errorTripCompanionCountLimitReached = exports.errorTripDocumentCountLimitReached = exports.errorTripEventCountLimitReached = exports.errorTripExpenseCountLimitReached = exports.errorTripMemoryCountLimitReached = exports.errorTripNoteCountLimitReached = exports.errorTripPlaceCountLimitReached = exports.errorTripCheckpointCountLimitReached = exports.errorTripsLimitReached = exports.errorInvitationExpired = exports.errorCantJoinOwnedTrip = exports.errorPhoneNumberFormatIsIncorrect = exports.errorCompanionLocationIsAlreadyBeingRequested = exports.errorSearchingTextIsTooLong = exports.errorDestinationAreaBordersNotFound = exports.errorPersonEmailOptedOut = exports.errorJWTCorrupted = exports.errorLocationNotSupported = exports.errorPermissionDenied = exports.errorGoogleLoginUnavailable = exports.errorFacebookLoginUnavailable = exports.errorFileSizeToBig = exports.errorFileSizeToSmall = exports.errorBadFileMimeType = exports.errorOutOfCredits = exports.errorUnexpectedError = exports.requiredPropertyNotSet = exports.errorFacebookLoginUnavailableMessage = exports.unexpectedServerErrorMessage = exports.applicationErrorCode = void 0;
exports.applicationErrorCode = "123454321";
var errorFactory = function (code, message, isSilent) {
    if (isSilent === void 0) { isSilent = false; }
    return {
        code: code,
        message: message,
        isSilent: isSilent,
    };
};
exports.unexpectedServerErrorMessage = "Unexpected server error occurred";
exports.errorFacebookLoginUnavailableMessage = "Unable to sign up with facebook";
exports.requiredPropertyNotSet = errorFactory("10000", "Required property is not set");
exports.errorUnexpectedError = errorFactory("10001", exports.unexpectedServerErrorMessage);
exports.errorOutOfCredits = errorFactory("10002", "Out of credits");
exports.errorBadFileMimeType = errorFactory("10003", "Given file type is not allowed");
exports.errorFileSizeToSmall = errorFactory("10004", "Given file size is too small");
exports.errorFileSizeToBig = errorFactory("10005", "Given file size is too big");
exports.errorFacebookLoginUnavailable = errorFactory("10006", exports.errorFacebookLoginUnavailableMessage);
exports.errorGoogleLoginUnavailable = errorFactory("10007", "Unable to sign up with google");
exports.errorPermissionDenied = errorFactory("10008", "Permission denied");
exports.errorLocationNotSupported = errorFactory("10010", "Sorry, this location is not supported");
exports.errorJWTCorrupted = errorFactory("10011", exports.unexpectedServerErrorMessage);
exports.errorPersonEmailOptedOut = errorFactory("10012", "Can't send mail to provided email");
exports.errorDestinationAreaBordersNotFound = errorFactory("10013", "Destination borders not found", true);
exports.errorSearchingTextIsTooLong = errorFactory("10014", "Search text is too long");
exports.errorCompanionLocationIsAlreadyBeingRequested = errorFactory("10015", "Companion is busy right now");
exports.errorPhoneNumberFormatIsIncorrect = errorFactory("10016", "Incorrect phone number format");
exports.errorCantJoinOwnedTrip = errorFactory("10017", "Can't join a trip that you are already a member of");
exports.errorInvitationExpired = errorFactory("10018", "Invitation to trip has expired");
exports.errorTripsLimitReached = errorFactory("10019", "Trips limit reached if you need more please contact support");
exports.errorTripCheckpointCountLimitReached = errorFactory("10020", "Checkpoint count for this trip limit reached");
exports.errorTripPlaceCountLimitReached = errorFactory("10021", "Place count for this trip limit reached");
exports.errorTripNoteCountLimitReached = errorFactory("10022", "Note count for this trip limit reached");
exports.errorTripMemoryCountLimitReached = errorFactory("10023", "Memory count for this trip limit reached");
exports.errorTripExpenseCountLimitReached = errorFactory("10024", "Expense count for this trip limit reached");
exports.errorTripEventCountLimitReached = errorFactory("10025", "Event count for this trip limit reached");
exports.errorTripDocumentCountLimitReached = errorFactory("10026", "Document count for this trip limit reached");
exports.errorTripCompanionCountLimitReached = errorFactory("10027", "Companion count for this trip limit reached");
exports.errorTripChecklistNameAlreadyExists = errorFactory("10028", "Checklist with given name already exists");
exports.errorTripChecklistCountLimitReached = errorFactory("10029", "Checklist count for this trip limit reached");
exports.errorTripChecklistItemsCountLimitReached = errorFactory("10030", "Checklist items count for this trip limit reached");
exports.errorUnableToFetchTripDestinationRiskStatistics = errorFactory("10031", "Unable to get trip destination risk statistics", true);
exports.errorRemindersLimitReached = errorFactory("10033", "Reminders limit reached");
exports.errorInvalidEmailFormat = errorFactory("10034", "Invalid email format");

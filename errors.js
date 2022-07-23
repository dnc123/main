export const applicationErrorCode = `123454321`;
const errorFactory = (code, message, isSilent = false) => {
    return {
        code,
        message,
        isSilent,
    };
};
export const unexpectedServerErrorMessage = `Unexpected server error occurred`;
export const errorFacebookLoginUnavailableMessage = `Unable to sign up with facebook`;
export const requiredPropertyNotSet = errorFactory(`10000`, `Required property is not set`);
export const errorUnexpectedError = errorFactory(`10001`, unexpectedServerErrorMessage);
export const errorOutOfCredits = errorFactory(`10002`, `Out of credits`);
export const errorBadFileMimeType = errorFactory(`10003`, `Given file type is not allowed`);
export const errorFileSizeToSmall = errorFactory(`10004`, `Given file size is too small`);
export const errorFileSizeToBig = errorFactory(`10005`, `Given file size is too big`);
export const errorFacebookLoginUnavailable = errorFactory(`10006`, errorFacebookLoginUnavailableMessage);
export const errorGoogleLoginUnavailable = errorFactory(`10007`, `Unable to sign up with google`);
export const errorPermissionDenied = errorFactory(`10008`, `Permission denied`);
export const errorLocationNotSupported = errorFactory(`10010`, `Sorry, this location is not supported`);
export const errorJWTCorrupted = errorFactory(`10011`, unexpectedServerErrorMessage);
export const errorPersonEmailOptedOut = errorFactory(`10012`, `Can't send mail to provided email`);
export const errorDestinationAreaBordersNotFound = errorFactory(`10013`, `Destination borders not found`, true);
export const errorSearchingTextIsTooLong = errorFactory(`10014`, `Search text is too long`);
export const errorCompanionLocationIsAlreadyBeingRequested = errorFactory(`10015`, `Companion is busy right now`);
export const errorPhoneNumberFormatIsIncorrect = errorFactory(`10016`, `Incorrect phone number format`);
export const errorCantJoinOwnedTrip = errorFactory(`10017`, `Can't join a trip that you are already a member of`);
export const errorInvitationExpired = errorFactory(`10018`, `Invitation to trip has expired`);
export const errorTripsLimitReached = errorFactory(`10019`, `Trips limit reached if you need more please contact support`);
export const errorTripCheckpointCountLimitReached = errorFactory(`10020`, `Checkpoint count for this trip limit reached`);
export const errorTripPlaceCountLimitReached = errorFactory(`10021`, `Place count for this trip limit reached`);
export const errorTripNoteCountLimitReached = errorFactory(`10022`, `Note count for this trip limit reached`);
export const errorTripMemoryCountLimitReached = errorFactory(`10023`, `Memory count for this trip limit reached`);
export const errorTripExpenseCountLimitReached = errorFactory(`10024`, `Expense count for this trip limit reached`);
export const errorTripEventCountLimitReached = errorFactory(`10025`, `Event count for this trip limit reached`);
export const errorTripDocumentCountLimitReached = errorFactory(`10026`, `Document count for this trip limit reached`);
export const errorTripCompanionCountLimitReached = errorFactory(`10027`, `Companion count for this trip limit reached`);
export const errorTripChecklistNameAlreadyExists = errorFactory(`10028`, `Checklist with given name already exists`);
export const errorTripChecklistCountLimitReached = errorFactory(`10029`, `Checklist count for this trip limit reached`);
export const errorTripChecklistItemsCountLimitReached = errorFactory(`10030`, `Checklist items count for this trip limit reached`);
export const errorUnableToFetchTripDestinationRiskStatistics = errorFactory(`10031`, `Unable to get trip destination risk statistics`, true);
export const errorRemindersLimitReached = errorFactory(`10033`, `Reminders limit reached`);
export const errorInvalidEmailFormat = errorFactory(`10034`, `Invalid email format`);

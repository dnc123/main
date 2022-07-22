<template>
    <div class='datePicker'>
        <div class='datePicker__monthControls'>
            <Icon
                name='chevron_left'
                :size-rem='2.6'
                class='datePicker__monthControls__arrow'
                @click='addMonthsToPreviewDate(-1)'
            />

            <span class='datePicker__monthControls__month'>
                {{ formatDate(previewDate, true, true, false) }}
            </span>

            <Icon
                name='chevron_right'
                :size-rem='2.6'
                class='datePicker__monthControls__arrow'
                @click='addMonthsToPreviewDate(1)'
            />
        </div>

        <div class='datePicker__dates datePicker__dates--head'>
            <span class='datePicker__dates__date'>M</span>
            <span class='datePicker__dates__date'>T</span>
            <span class='datePicker__dates__date'>W</span>
            <span class='datePicker__dates__date'>T</span>
            <span class='datePicker__dates__date'>F</span>
            <span class='datePicker__dates__date'>S</span>
            <span class='datePicker__dates__date'>S</span>
        </div>

        <div class='datePicker__dates datePicker__dates--body'>
            <span
                v-for='_ in emptyDaysCountStartOfMonth'
                class='datePicker__dates__date'
            />

            <span
                v-for='date in totalDaysInPreviewMonth'
                class='datePicker__dates__date'
                :class='{
                    "datePicker__dates__date--selected": isDateActive(date),
                    "datePicker__dates__date--inRange": isDateBetweenRange(date),
                }'
                @click='selectDate(date)'
            >
                {{ date }}
            </span>
        </div>

        <HorizontalRow />

        <div v-if='isRange' class='datePicker__doneButtonBlock'>
            <p class='datePicker__doneButtonBlock__infoText'>
                <template v-if='!value.from'>Select start date</template>
                <template v-else-if='!value.to'>Select end date</template>
                <template v-else>
                    {{ formatInfoDate(value.from) }}
                    -
                    {{ formatInfoDate(value.to) }}
                </template>
            </p>

            <Button
                class='datePicker__doneButtonBlock__button'
                @click='$emit("done")'
            >
                Done
            </Button>
        </div>
    </div>
</template>

<script>
    import {
        startOfMonth,
        getDay,
        endOfMonth,
        getDate,
        addMonths,
        setDate,
        isSameDay,
        isBefore,
        isAfter,
        isWithinInterval,
        endOfDay,
        startOfDay,
        format,
    } from 'date-fns';
    import formatDate from '../../../helpers/date/formatDate';
    import Icon from './Icon';
    import HorizontalRow from './HorizontalRow';
    import Button from './Button';

    export default {
        props: {
            value: {
                type: [Date, Object],
                default: null,
            },

            isRange: {
                type: Boolean,
                default: false,
            },
        },

        data () {
            return {
                previewDate: new Date(),
                isRangeSelectingFrom: true,
            };
        },

        computed: {
            emptyDaysCountStartOfMonth () {
                const emptyDaysCountStartOfMonth = getDay(startOfMonth(this.previewDate)) - 1;
                const SUNDAY = -1;

                return emptyDaysCountStartOfMonth === SUNDAY
                    ? 6
                    : emptyDaysCountStartOfMonth;
            },

            totalDaysInPreviewMonth () {
                return getDate(endOfMonth(this.previewDate));
            },
        },

        methods: {
            getDay,
            startOfMonth,
            formatDate,

            formatInfoDate (date) {
                return format(date, 'EEEE, MMM dd');
            },

            addMonthsToPreviewDate (addCount) {
                this.previewDate = addMonths(this.previewDate, addCount);
            },

            selectDate (targetDate) {
                const selectedDateValue = setDate(new Date(this.previewDate), targetDate);
                let selectedDate;

                if (this.isRange) {
                    if (!this.isRangeSelectingFrom && isSameDay(this.value.from, selectedDateValue)) {
                        return;
                    }

                    selectedDate = {
                        ...this.value,
                    };

                    if (this.isRangeSelectingFrom) {
                        selectedDate.to = null;
                    }

                    selectedDate[this.isRangeSelectingFrom ? 'from' : 'to'] = selectedDateValue;

                    if (isAfter(selectedDate.from, selectedDate.to)) {
                        const oldDateFrom = selectedDate.from;

                        selectedDate.from = selectedDate.to;
                        selectedDate.to = oldDateFrom;
                    }

                    this.isRangeSelectingFrom = !this.isRangeSelectingFrom;
                } else {
                    selectedDate = selectedDateValue;
                }

                this.$emit('input', selectedDate);
            },

            isDateActive (date) {
                const isDateActive = (checkingDate) => {
                    return isSameDay(
                        setDate(this.previewDate, date),
                        checkingDate,
                    );
                };

                return this.isRange
                    ? isDateActive(this.value.from) || isDateActive(this.value.to)
                    : isDateActive(this.value);
            },

            isDateBeforeRangeStart (date) {
                return isBefore(
                    date,
                    startOfDay(this.value.from),
                );
            },

            isDateBetweenRange (date) {
                if (!this.isRange || !this.value.from || !this.value.to) {
                    return false;
                }

                return isWithinInterval(
                    setDate(this.previewDate, date),
                    {
                        start: endOfDay(this.value.from),
                        end: startOfDay(this.value.to),
                    },
                );
            },
        },

        components: {
            Button,
            HorizontalRow,
            Icon,
        },
    };
</script>

<style lang='scss' scoped>
    @import '../../../styles/colors';

    .datePicker {
        width:       100%;
        max-width:   34rem;
        padding-top: 1rem;

        &__monthControls {
            display:         flex;
            align-items:     center;
            justify-content: center;
            font-size:       1.8rem;

            &__arrow {
                cursor: pointer;
            }

            &__month {
                margin:      0 0.5rem;
                user-select: none;
            }
        }

        &__dates {
            display:     flex;
            align-items: center;
            flex-wrap:   wrap;

            &--head {
                .datePicker__dates__date {
                    cursor:      default;
                    user-select: none;
                }
            }

            &--body {
                .datePicker__dates__date {
                    &:not(:empty) {
                        background-color: transparent;
                        cursor:           pointer;

                        &:hover {
                            background-color: lighten($color__neutral, 78);
                        }
                    }
                }
            }

            &__date {
                display:         inline-flex;
                align-items:     center;
                justify-content: center;
                width:           calc(100% / 7);
                font-size:       clamp(1rem, 6vw, 1.6rem);
                aspect-ratio:    1;
                user-select:     none;
                position:        relative;

                &--selected {
                    background-color: $color__dark !important;
                    color:            $color__light;
                    font-weight:      bold;
                }

                &--inRange {
                    background-color: lighten($color__dark, 55) !important;
                }
            }
        }

        &__doneButtonBlock {
            padding: 1.5rem;

            &__infoText {
                text-align:    center;
                margin-bottom: 1rem;
            }

            &__button {
                width: 100%;
            }
        }
    }
</style>

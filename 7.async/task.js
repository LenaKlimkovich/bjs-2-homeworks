class AlarmClock {
    constructor(alarmCollection, intervalId = null) {
        this.alarmCollection = [];
        this.intervalId = intervalId;
    }

    addClock(time, callback) {
        if (!time || !callback) {
            throw new Error('Отсутствуют обязательные аргументы');
        } else if (this.alarmCollection.includes(time)) {
            console.warn('Уже присутствует звонок на это же время')
            return
        } else {
            this.alarmCollection.push({
                callback,
                time,
                canCall: true
            })
        }
    }

    removeClock(time) {
        let filtered = this.alarmCollection.filter(alarm => alarm.time === time);
        this.alarmCollection.splice(filtered, 1);
    }

    getCurrentFormattedTime() {
        const date = new Date
        console.log(date.toLocaleTimeString("ru-Ru", {
            hour: '2-digit',
            minute: '2-digit'
        }));
    }

    start() {
        if (this.intervalId !== null) {
            return
        }
        return this.intervalId = setInterval(() => {
            this.alarmCollection.forEach((alarm) => {
                if (alarm.time === getCurrentFormattedTime() && alarm.canCall === true) {
                    alarm.canCall = false
                    alarm.callback();
                }
            })
        }, 1000)
    }

    stop() {
        clearInterval(this.intervalId);
        this.intervalId = null;
    }

    resetAllCalls() {
        this.alarmCollection.forEach(item => item.canCall = true)
    }

    clearAlarms() {
        this.stop()
        this.alarmCollection = []
    }
}
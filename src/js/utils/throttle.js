/**
 * Функция throttle возвращает обертку для функции, которая ограничивает частоту вызова функции до указанного интервала времени.
 * @param {Function} func - Функция, вызов которой нужно ограничить.
 * @param {number} ms - Интервал времени в миллисекундах, в течение которого вызовы функции будут игнорироваться.
 * @returns {Function} - Обертка, ограничивающая частоту вызова функции.
 */

window.throttle = (func, ms) => {
    let isThrottled = false,
        savedArgs,
        savedThis

    function wrapper() {

        if (isThrottled) { // 2
            savedArgs = arguments
            savedThis = this
            return
        }

        func.apply(this, arguments) // 1

        isThrottled = true

        setTimeout(function() {
            isThrottled = false // 3
            if (savedArgs) {
                wrapper.apply(savedThis, savedArgs)
                savedArgs = savedThis = null
            }
        }, ms)
    }

    return wrapper
}
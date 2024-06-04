/**
 * Показывает спиннер, указывая на загрузку данных.
 * @function showSpinner
 * @returns {void}
 */
const showSpinner = () => {
    const spinner = document.getElementById('spinner')
    spinner.classList.add('display')
    setTimeout(() => spinner.classList.add('visible'), 100)
}

/**
 * Скрывает спиннер после завершения загрузки данных.
 * @function hideSpinner
 * @returns {void}
 */
const hideSpinner = () => {
    const spinner = document.getElementById('spinner')
    spinner.classList.remove('visible')
    setTimeout(() => spinner.classList.remove('display'), 1000)
}

/**
 * Добавляет обработчики для показа и скрытия спиннера при загрузке страницы.
 */
window.addEventListener('load', () => {
    if (document.getElementById('spinner')) {
        window.spinner.show = showSpinner
        window.spinner.hide = hideSpinner
    }
})
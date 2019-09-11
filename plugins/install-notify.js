/* eslint-disable no-unused-vars */
/* eslint-disable no-console */

let deferredPrompt
let isAlreadyInstalled
const addContext = document.getElementById('appInstall')
const btnAdd = document.getElementById('btnInstall')

if (
  window.matchMedia('(display-mode: standalone)').matches ||
  window.navigator.standalone === true
) {
  isAlreadyInstalled = true
} else {
  isAlreadyInstalled = false
}

if (process.browser && !isAlreadyInstalled) {
  window.addEventListener('beforeinstallprompt', e => {
    // Prevent Chrome 67 and earlier from automatically showing the prompt
    e.preventDefault()

    // Stash the event so it can be triggered later.
    deferredPrompt = e

    // Update UI notify the user they can add to home screen
    addContext.style.display = 'flex'
    addContext.setAttribute('notify', 'true')

    btnAdd.addEventListener('click', e => {
      // hide our user interface that shows our A2HS button
      addContext.style.display = 'none'

      // Show the prompt
      deferredPrompt.prompt()

      // Wait for the user to respond to the prompt
      deferredPrompt.userChoice.then(choiceResult => {
        if (choiceResult.outcome === 'accepted') {
          console.log('User accepted the A2HS prompt')

          window.addEventListener('appinstalled', evt => {
            console.log('App installed')
          })
        } else {
          console.log('User dismissed the A2HS prompt')
        }
        deferredPrompt = null
      })
    })
  })
}

const header = document.getElementById('header')
const title = document.getElementById('title')
const excerpt = document.getElementById('excerpt')
const profile_img = document.getElementById('profile_img')
const name = document.getElementById('name')
const date = document.getElementById('date')

const animated_bgs = document.querySelectorAll('.animated-bg')
const animated_bgs_text = document.querySelectorAll('.animated-bg-text')

setTimeout(getData, 1250)

function getData() {
    header.innerHTML = '<img src="https://cdn.vox-cdn.com/thumbor/GOtT6Rxrm2KIJpR0c5iI-qGAayM=/1400x788/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/22008054/archives_helix.jpg" alt="Universe" />'
    title.innerHTML = 'Extraordinary claims require extraordinary evidence'
    excerpt.innerHTML = 'Great turbulent clouds globular star cluster shores of the cosmic ocean tendrils of gossamer clouds Flatland corpus callosum'
    profile_img.innerHTML = '<img src="https://randomuser.me/api/portraits/men/45.jpg" alt="Profile image" />'
    name.innerHTML = 'John Doe'
    date.innerHTML = 'June 28, 2021'

    animated_bgs.forEach(bg => bg.classList.remove('animated-bg'))
    animated_bgs_text.forEach(bg => bg.classList.remove('animated-bg-text'))
}
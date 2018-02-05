// data comes from api
const data = [
  {
    name: 'Nemanja Nikolic',
    age: 32,
    gender: 'male',
    lookingFor: 'female',
    location: 'Beograd',
    image: 'https://randomuser.me/api/portraits/men/82.jpg'
  }, {
    name: 'Pera Peric',
    age: 18,
    gender: 'male',
    lookingFor: 'female',
    location: 'Kragujevac',
    image: 'https://randomuser.me/api/portraits/men/23.jpg'
  }, {
    name: 'Bozana Kilic',
    age: 38,
    gender: 'female',
    lookingFor: 'male',
    location: 'Nis',
    image: 'https://randomuser.me/api/portraits/women/82.jpg'
  }
];

const profiles = profileIterator(data);

// Call first profile
nextProfile();

// Next event
document.getElementById('next').addEventListener('click', nextProfile);

function nextProfile() {

  let currentProfile = profiles.next().value;
  if (currentProfile) {
    document.getElementById('profileDisplay').innerHTML = `
      <ul class="list-group">
        <li class="list-group-item">Name: ${currentProfile.name}</li>
        <li class="list-group-item">Age: ${currentProfile.age}</li>
        <li class="list-group-item">Location: ${currentProfile.location}</li>
        <li class="list-group-item">Preference: ${currentProfile.gender} looking for ${currentProfile.lookingFor}</li>
      </ul>
    `;

    document.getElementById('imageDisplay').innerHTML = `
      <img src="${currentProfile.image}" />
    `;
  } else {
    // No more profiles
    window.location.reload();
  }
}

// Create profile iterator
function profileIterator(profiles) {
  let nextIndex = 0;

  return {
    next: function() {
      return nextIndex < profiles.length
        ? {
          value: profiles[nextIndex++],
          done: false
        }
        : {
          done: true
        };
    }
  };
}

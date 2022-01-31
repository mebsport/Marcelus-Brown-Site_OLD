//click on socials
//get buttons
const githubButton = document.getElementById('github-link');
const youtubeButton = document.getElementById('youtube-link');
const instagramButton = document.getElementById('instagram-link');
// console.log(githubButton);
// console.log(youtubeButton);
// console.log(instagramButton);
//on click methods
githubButton.addEventListener('click', () => {
  console.log('Open GitHub');
  window.open('https://github.com/mebsport', '_blank');
});
youtubeButton.addEventListener('click', () => {
  console.log('Open YouTube');
  window.open(
    'https://www.youtube.com/channel/UCAfLIonq6STwupVN8KY40oA',
    '_blank'
  );
});
instagramButton.addEventListener('click', () => {
  console.log('Open Instagram');
  window.open('https://www.instagram.com/mebsport/', '_blank');
});

//languages functionality

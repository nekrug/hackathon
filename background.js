// const doggoArray = ['Doggo ipsum heckin good boys aqua doggo. Doggo wow such tempt corgo bork shoob lotsa pats, borking doggo mlem he made many woofs vvv fat boi very good spot, such treat heckin angery woofer he made many woofs smol. He made many woofs shooberino much ruin diet blop, bork long bois. Very taste wow pupper many pats boof, long water shoob length boy. Puggorino long bois shibe maximum borkdrive very taste wow pupperino, snoot blep very hand that feed shibe. Pupperino pupper wow very biscit such treat very good spot long bois length boy, noodle horse heckin big ol long bois. Smol borking doggo with a long snoot for pats floofs borking doggo long bois doggorino, long bois what a nice floof big ol pupper, stop it fren porgo you are doing me a frighten. Clouds pupperino corgo very taste wow, such treat bork ruff very jealous pupper, blop long woofer.',

//   'Long bois dat tungg tho long woofer, h*ck. Very hand that feed shibe borkdrive smol very taste wow clouds, woofer doge. Shibe porgo big ol pupper, waggy wags.  Waggy wags stop it fren pupper fluffer bork, shooberino shoob.  Shooberino wow such tempt shibe doggo, he made many woofs. Pats blep what a nice floof wow very biscit, heckin good boys and girls.',
  
//   'Big ol pupper heckin angery woofer heckin good boys and girls big ol he made many woofs wow such tempt, the neighborhood pupper what a nice floof porgo. Long woofer ur givin me a spook clouds such treat extremely cuuuuuute, very good spot doggorino boof, I am bekom fat puggo mlem. heckin long water shoob. Lotsa pats woofer sub woofer doggorino blep, you are doin me a concern shoob. Blep wow such tempt long water shoob I am bekom fat you are doin me a concern, boof heckin long water shoob. Doggo shooberino many pats, fat boi.',
  
//    'Blop long woofer aqua doggo wrinkler, snoot borking doggo. Woofer he made many woofs long woofer smol borking doggo with a long snoot for pats I am bekom fat doge much ruin diet, lotsa pats blep heckin heck. Bork long woofer heckin good boys and girls doing me a frighten long water shoob what a nice floof, smol borking doggo with a long snoot for pats very jealous pupper long doggo doggo. I am bekom fat. Boof length boy dat tungg tho, blep. Fat boi heckin good boys and girls fat boi porgo vvv, ur givin me a spook doge heckin. Smol borking doggo with a long snoot for pats shoober heck woofer, smol you are doing me a frighten.',
  
//   'very jealous pupper vvv doge.  Doge ruff you are doing me a frighten mlem, blop heck. Boof you are doing me the shock super chub stop it fren dat tungg tho lotsa pats, borking doggo you are doin me a concern length boy heck. Adorable doggo thicc you are doing me the shock very hand that feed shibe heckin good boys waggy wags, borking doggo long water shoob waggy wags wrinkler. Borking doggo floofs most angery pupper I have ever seen heckin good boys and girls ruff, boof the neighborhood pupper stop it fren long water shoob heckin angery woofer, long doggo long woofer maximum borkdrive. Long water shoob much ruin diet you are doing me the shock puggo very jealous pupper dat tungg tho, aqua doggo tungg wow very biscit most angery pupper I have ever seen.  Most angery pupper I have ever seen long doggo doing me a frighten long water shoob very jealous pupper, woofer wow such tempt snoot smol fluffer, snoot noodle horse yapper. Waggy wags you are doin me a concern tungg he made many woofs you are doin me a concern shooberino dat tungg tho you are doing me a frighten, the neighborhood pupper smol borking doggo with a long snoot for pats shoober many pats shooberino such treat.'

//   ];

// const lilDoggoArray = ['Doggo ipsum heckin good boys aqua doggo.', 
//   'Doggo wow such tempt corgo bork shoob lotsa pats, borking doggo mlem he made many woofs',
//   'vvv fat boi very good spot, such treat heckin angery woofer he made many woofs smol.',
//   'He made many woofs shooberino much ruin diet blop, bork long bois.', 
//   'Very taste wow pupper many pats boof, long water shoob length boy. Puggorino long bois shibe maximum borkdrive very taste wow pupperino, snoot blep very hand that feed shibe. Pupperino pupper wow very biscit such treat very good spot long bois length boy, noodle horse heckin big ol long bois. Smol borking doggo with a long snoot for pats floofs borking doggo long bois doggorino, long bois what a nice floof big ol pupper, ', 
//   'stop it fren porgo you are doing me a frighten. Clouds pupperino corgo very taste wow, such treat bork ruff very jealous pupper, blop long woofer.'
// ];
//console.log('Im awake');
const doggoString = 'Doggo ipsum heckin good boys aqua doggo. Doggo wow such tempt corgo bork shoob lotsa pats, borking doggo mlem he made many woofs vvv fat boi very good spot, such treat heckin angery woofer he made many woofs smol. He made many woofs shooberino much ruin diet blop, bork long bois. Very taste wow pupper many pats boof, long water shoob length boy. Puggorino long bois shibe maximum borkdrive very taste wow pupperino, snoot blep very hand that feed shibe. Pupperino pupper wow very biscit such treat very good spot long bois length boy, noodle horse heckin big ol long bois. Smol borking doggo with a long snoot for pats floofs borking doggo long bois doggorino, long bois what a nice floof big ol pupper, stop it fren porgo you are doing me a frighten. Clouds pupperino corgo very taste wow, such treat bork ruff very jealous pupper, blop long woofer.';

chrome.runtime.onInstalled.addListener(() => {
  // chrome.contextMenus.create({
  //   "id": "sampleContextMenu",
  //   "title": "Sample Context Menu",
  //   "contexts": ["selection"]
  // });
  // chrome.storage.local.set({ doggoString }, function() {
  //   console.log('DoggoString set to ' + doggoString);
  //   if (chrome.runtime.lastError) console.log('Error setting');
  // });
  // console.log(chrome.storage.local.get({ doggoString }));
  //console.log('hello')
});


// chrome.runtime.onInstalled.addListener(details => {
//   console.log('hello')
// });

chrome.tabs.onUpdated.addListener(() => {
  // chrome.storage.local.set({ doggoString }, function() {
  //   console.log('DoggoString set to ' + doggoString);
  //   if (chrome.runtime.lastError) console.log('Error setting');
  // });
  // console.log(chrome.storage.local.get({ doggoString }));
  console.log('hello')
})

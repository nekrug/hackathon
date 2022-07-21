// Initialize butotn with users's prefered color
let removeText = document.getElementById("removeText");

// chrome.storage.sync.get("color", ({ color }) => {
//   changeColor.style.backgroundColor = color;
// });

function removeAllText(element=document.querySelector('body')) {
  // loop through all the nodes of the element
  const nodes = element.childNodes;
  console.log(`currently working on element ${element}`);
  for (let i = 0; i < nodes.length; i++) {
    const node = nodes[i];
    // if it's a text node, remove it
    if(node.nodeType == Node.TEXT_NODE) {
      console.log(`removing node ${node}`);
      node.parentNode.removeChild(node);
      i--; // have to update our incrementor since we just removed a node from childNodes
    } else if (node.nodeType == Node.ELEMENT_NODE) {
        removeAllText(node);
      }
    }
    // if it's an element, repeat this process
}

async function doggoAllText(element=document.querySelector('body'), ) {

let doggoString = 'Doggo ipsum heckin good boys aqua doggo. Doggo wow such tempt corgo bork shoob lotsa pats, borking doggo mlem he made many woofs vvv fat boi very good spot, such treat heckin angery woofer he made many woofs smol. He made many woofs shooberino much ruin diet blop, bork long bois. Very taste wow pupper many pats boof, long water shoob length boy. Puggorino long bois shibe maximum borkdrive very taste wow pupperino, snoot blep very hand that feed shibe. Pupperino pupper wow very biscit such treat very good spot long bois length boy, noodle horse heckin big ol long bois. Smol borking doggo with a long snoot for pats floofs borking doggo long bois doggorino, long bois what a nice floof big ol pupper, stop it fren porgo you are doing me a frighten. Clouds pupperino corgo very taste wow, such treat bork ruff very jealous pupper, blop long woofer. Long bois dat tungg tho long woofer, h*ck. Very hand that feed shibe borkdrive smol very taste wow clouds, woofer doge. Shibe porgo big ol pupper, waggy wags.  Waggy wags stop it fren pupper fluffer bork, shooberino shoob.  Shooberino wow such tempt shibe doggo, he made many woofs. Pats blep what a nice floof wow very biscit, heckin good boys and girls. Big ol pupper heckin angery woofer heckin good boys and girls big ol he made many woofs wow such tempt, the neighborhood pupper what a nice floof porgo. Long woofer ur givin me a spook clouds such treat extremely cuuuuuute, very good spot doggorino boof, I am bekom fat puggo mlem. heckin long water shoob. Lotsa pats woofer sub woofer doggorino blep, you are doin me a concern shoob. Blep wow such tempt long water shoob I am bekom fat you are doin me a concern, boof heckin long water shoob. Doggo shooberino many pats, fat boi.';
await chrome.storage.local.set({ doggoString });
let doggo = await chrome.storage.local.get({doggoString})
// console.log(doggo.doggoString);

const getCharFromRandomSpaces = (str) => {
  let maxSpaces = 260;
  let randSpace = Math.floor(Math.random() * maxSpaces);
  for (let i = 0; i < str.length; i++) {
    if (str[i] === ' ') randSpace--;
    if (randSpace === 0) return i;
  }
}


const findNextSpace = (str) => {
  for (let i = 0; i < str.length; i++) {
    if (str[i] === ' ') return i;
  }
}

const nodes = element.childNodes;
//console.log(`currently working on element ${element}`);
for (let i = 0; i < nodes.length; i++) {
  const node = nodes[i];
  // if it's a text node, remove it
  if(node.nodeType == Node.TEXT_NODE) {
    let startChar = getCharFromRandomSpaces(doggoString);
    console.log(`startChar is ${startChar}`);
    //console.log(doggoString.slice(startChar, startChar + node.length + findNextSpace(doggoString.slice(startChar + node.length))));
    let textNode = document.createTextNode(doggoString.slice(startChar, startChar + node.length+findNextSpace(doggoString.slice(startChar + node.length))));
    node.parentNode.replaceChild(textNode, node);
    //i--; // have to update our incrementor since we just removed a node from childNodes
  } else if (node.nodeType == Node.ELEMENT_NODE) {
    doggoAllText(node, doggo);
    }
  }
}
async function initDoggo() {
  console.log('compelted set')
}

// When the button is clicked, inject setPageBackgroundColor into current page
removeText.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: initDoggo,
  });

});

removeText.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  await chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: doggoAllText,
  });
});
// The body of this function will be execuetd as a content script inside the
// current page
// function removeAllText() {
  // chrome.storage.sync.get("color", ({ color }) => {
    // document.body.style.backgroundColor = color;
  // });
  // console.log(document.body);
// }

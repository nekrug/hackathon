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

let doggoString = 'Doggo ipsum heckin good boys aqua doggo. Doggo wow such tempt corgo bork shoob lotsa pats, borking doggo mlem he made many woofs vvv fat boi very good spot, such treat heckin angery woofer he made many woofs smol. He made many woofs shooberino much ruin diet blop, bork long bois. Very taste wow pupper many pats boof, long water shoob length boy. Puggorino long bois shibe maximum borkdrive very taste wow pupperino, snoot blep very hand that feed shibe. Pupperino pupper wow very biscit such treat very good spot long bois length boy, noodle horse heckin big ol long bois. Smol borking doggo with a long snoot for pats floofs borking doggo long bois doggorino, long bois what a nice floof big ol pupper, stop it fren porgo you are doing me a frighten. Clouds pupperino corgo very taste wow, such treat bork ruff very jealous pupper, blop long woofer.';
// await chrome.storage.local.set({ doggoString });
// let doggo = await chrome.storage.local.get({ doggoString })
let doggo = doggoString;
console.log(doggo);
  // console.log('function starting');
  // initialize our doggo text by getting it from chrome storagexxx
  // just grab the first element from our list so we have something to work with
  //let el = doggo;

  // loop through all the children
  // check if the current node is a text node
  // if it is, figure out what property we need (innerText or something) that lets us access the text
    // once we have that, grab its length. that will be the number of characters we need.
    // replace that property with the same number of elements from our stored doggo list
    // don't decrement our incrementor
  // else if the current node is an element node
    // recursively call doggoAllText on the current node

// loop through all the nodes of the element
const nodes = element.childNodes;
//console.log(`currently working on element ${element}`);
for (let i = 0; i < nodes.length; i++) {
  const node = nodes[i];
  // if it's a text node, remove it
  if(node.nodeType == Node.TEXT_NODE) {
    //console.log(`removing node ${node}`);
    //node.parentNode.child(node)=el;
    //console.log(node.length);
    let textNode = document.createTextNode(doggoString.slice(0, node.length));
    doggoString = doggoString.slice(node.length);
    node.parentNode.replaceChild(textNode, node);
    //i--; // have to update our incrementor since we just removed a node from childNodes
  } else if (node.nodeType == Node.ELEMENT_NODE) {
    doggoAllText(node, doggoString);
    }
  }
}

// When the button is clicked, inject setPageBackgroundColor into current page
removeText.addEventListener("click", async () => {
  console.log('got to here first');
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  console.log('got to here');
  chrome.scripting.executeScript({
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

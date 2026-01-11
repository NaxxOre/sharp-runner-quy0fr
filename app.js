const out=document.getElementById('out');
const notes=document.getElementById('notes');
const btn=document.getElementById('btn');
const copy=document.getElementById('copy');

function gen(){
  const now=new Date();
  const vals=[
    `ISO: ${now.toISOString()}`,
    `Unix: ${Math.floor(now.getTime()/1000)}`,
    `Lucky: ${Math.floor(Math.random()*999999)}`,
    `Color: #${Math.floor(Math.random()*0xffffff).toString(16).padStart(6,'0')}`,
  ];
  return vals[Math.floor(Math.random()*vals.length)];
}

btn.onclick=()=>{
  const v=gen();
  out.textContent=v;
  copy.disabled=false;

  const li=document.createElement('li');
  li.textContent=v;
  notes.prepend(li);
  while(notes.children.length>10) notes.removeChild(notes.lastChild);
};

copy.onclick=async()=>{
  try{
    await navigator.clipboard.writeText(out.textContent);
    copy.textContent="Copied!";
    setTimeout(()=>copy.textContent="Copy",800);
  }catch(e){}
};

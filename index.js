function imprimeHola() {
    console.log("hola")
}




function main() {
    console.log("starting..");
    const title = document.querySelector("h1");
    title.addEventListener("pointerenter",imprimeHola);
    const elements = Array.from(document.body.querySelectorAll("*"));
    
    const counters = elements.map (
        (item)=> {
            const obj = {
                element: item,
                counter: 0,
            }
            item.addEventListener("pointerenter", ()=>{
                obj.counter++;
                console.log(obj)
            });
            return obj //No es necesario pues obj ya guarda informacion y no necesita un return
        }
    );
    console.log(counters) 
    
}
window.addEventListener("load",main);


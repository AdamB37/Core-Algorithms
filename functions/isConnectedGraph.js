export default function isConnectedGraph(graph) {
  if(typeof(graph)!=='object'){
    return undefined;
  }

  const maxPathSteps = Object.keys(graph).length

  for ( let startKey in graph ) {
    for (let endKey in graph ) {

      if( startKey != endKey && !pathCheck(startKey, endKey, 1)){

        return false;
      }

    }
    return true;
  }


  function pathCheck(start, end, pathSteps){

    if( graph[start].indexOf(end) < 0 && pathSteps <= maxPathSteps) {
      for (let element of graph[start]){
        if(pathCheck(element,end,pathSteps+1)){
          return true;
        }
      }
      return false;

    }

    if( graph[start].indexOf(end) < 0 ){
      return false;
    }
    return true;
  }
}

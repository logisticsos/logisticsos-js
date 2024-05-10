export function getGeometryObj(stop: any) {
  return stop.geometry;
}

export function getRoutingLocations(route: any) {
  return route.map(getGeometryObj);
}

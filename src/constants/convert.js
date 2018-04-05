
export const  toISO = (d) => {
  if (!d) return d;
  return d.toISOString();//.split('.')[0]
}

export const toUTC = (d) => {
  if (!d) return d;
  return new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate(), d.getHours(), d.getMinutes(), 0))
}

export const fromISOToDate = (d) => {
  if (!d) return d;
  return new Date(d);
}

export const getMonday = (d) => {
  let dd = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate(), 0,0,0));
  var day = dd.getDay(),
      diff = dd.getDate() - day + (day === 0 ? -6:1); // adjust when day is sunday
  return new Date(dd.setDate(diff));
}

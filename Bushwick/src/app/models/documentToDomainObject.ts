
export function documentToDomainObject(_) {
    const object = _.payload.doc.data();
    object.id = _.payload.doc.id;
    return object;
}
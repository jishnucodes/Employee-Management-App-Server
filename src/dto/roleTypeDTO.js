export const roleTypeDTO = {
    id: '',
    roleTypeName: '',
    isAdmin: true,
    createdOn: Date.now(),
    modifiedOn: Date.now()
}

export const buildRoleTypeDTO = (obj) => {
    const rTDTO = {...roleTypeDTO};
    rTDTO.id = obj?._id;
    rTDTO.roleTypeName = obj?.roleTypeName;
    rTDTO.isAdmin = obj?.isAdmin;
    rTDTO.createdOn = obj?.createdOn;
    rTDTO.modifiedOn = obj?.modifiedOn;

    return rTDTO;
}
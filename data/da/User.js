import User from '../model/User'

// Mock data

var usersById = [
  new User( { id: 0, username: '', password: '', displayName: 'Anonymous', email: '' } ),
  new User( { id: 1, username: 'jack', password: 'secret', displayName: 'Jack', email: 'jack@example.com' } ),
  new User( { id: 2, username: 'jill', password: 'birthday', displayName: 'Jill', email: 'jill@example.com' } ),
];


// Data access functions

export function DA_User_getByUserName( username )
{
  for( let i = 0, len = usersById.length; i < len; i++ )
  {
    let record = usersById[ i ];
    if( record.username === username )
      return record;
  }

  return null;
}

export function DA_User_get( id )
{
  return usersById[ id ];
}

export function isomorphicVars( )
{
  if( typeof( window ) == 'undefined' )
  {
    // Running on server.
    return {
      // Modify the code below to set the variables >>>
      version: process.env.npm_package_version,
      // <<< Modify the code above to set the variables
    }
  }
  else
    return window.isomorphicVars;
}

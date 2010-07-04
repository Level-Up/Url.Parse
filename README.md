    @projectDescription	@aaronbassett's fork of Poly9's polyvalent URLParser class
    
    @author	Aaron Bassett - me@aaronbassett.com - http://aaronbassett.com
    @version	0.2 
    @namespace	Url
    
    Usage: var u = new Url.Parse('http://user:password@example.com/pathname?arguments=1#fragment');
    u.getHost() == 'example.com';
    u.getProtocol() == 'http';
    u.getPathname() == '/pathname';
    u.getQuerystring() == 'arguments=1';
    u.getFragment() == 'fragment';
    u.getUsername() == 'user';
    u.getPassword() == 'password';
    
    Url.Parse is freely distributable under the terms of an MIT-style license.

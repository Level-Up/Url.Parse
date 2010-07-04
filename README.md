
    @projectDescription 	@aaronbassett's fork of Poly9's polyvalent URLParser class
    
    @author			Aaron Bassett - me@aaronbassett.com - http://aaronbassett.com
    @version			0.2 
    @namespace			Url
    
    Usage: var u = new Url.Parse('http://user:password@example.com/pathname?arguments=1#fragment');
    p.getHost() == 'example.com';
    p.getProtocol() == 'http';
    p.getPathname() == '/pathname';
    p.getQuerystring() == 'arguments=1';
    p.getFragment() == 'fragment';
    p.getUsername() == 'user';
    p.getPassword() == 'password';
    
    Url.Parse is freely distributable under the terms of an MIT-style license.

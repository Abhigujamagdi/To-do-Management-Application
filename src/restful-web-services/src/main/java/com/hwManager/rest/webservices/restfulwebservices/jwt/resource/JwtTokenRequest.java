package com.hwManager.rest.webservices.restfulwebservices.jwt.resource;

import java.io.Serializable;

public class  JwtTokenRequest implements Serializable {
  
  private static final long serialVersionUID = -5616176897013108345L;

  private String username;
    private String password;
//    {
//    	"token": "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJod01hbmFnZXIiLCJleHAiOjE2NDUwNTkzMTcsImlhdCI6MTY0NDQ1NDUxN30.KJOIsH1k-_61dmPpdprLkh6LsAfBlcGJ-e970Tzz_5VUxMDPxXjeqPusDDYsbzecaN8s8KGqkPG7kGfhH6NCBA"
//    	}

    public JwtTokenRequest() {
        super();
    }

    public JwtTokenRequest(String username, String password) {
        this.setUsername(username);
        this.setPassword(password);
    }

    public String getUsername() {
        return this.username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return this.password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}


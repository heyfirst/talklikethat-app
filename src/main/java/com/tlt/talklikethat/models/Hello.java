package com.tlt.talklikethat.models;

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import com.tlt.talklikethat.models.ConnectionBuilder;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

/**
 *
 * @author KS
 */
public class Hello {
    private  int ID ;
    private String title ;
    
     public Hello(ResultSet rs) throws SQLException {
        this.ID = rs.getInt("id");
        this.title = rs.getString("title");
    }

    public static Hello findByID(int param){
        Hello u = null; 
        Connection conn = ConnectionBuilder.getConnection();
        try {
            PreparedStatement pstm = conn.prepareStatement("SELECT * FROM hello WHERE id = ?");
            pstm.setInt(1,param);
            ResultSet rs = pstm.executeQuery();
            while(rs.next()){               
               u = new Hello (rs);
            }
        } catch (SQLException ex) {
            System.out.println(ex);
        }
     return u ;   
    }

    public int getID() {
        return ID;
    }

    public void setID(int ID) {
        this.ID = ID;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }
    
}

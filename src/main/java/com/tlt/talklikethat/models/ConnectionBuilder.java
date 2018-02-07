/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.tlt.talklikethat.models;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

/**
 *
 * @author KS
 */
public class ConnectionBuilder {
    public static Connection getConnection() {
        Connection conn = null;
        try {
            Class.forName("com.mysql.jdbc.Driver").newInstance();
            //Get a connection
            conn = DriverManager.getConnection("jdbc:mysql://rdsinstance.c0rbj0dyxkze.ap-southeast-1.rds.amazonaws.com:3306/talklikethat_app","talklikethat_dev","talklikethat_dev");
           
        } catch (ClassNotFoundException | InstantiationException | IllegalAccessException | SQLException except) {
            except.printStackTrace();
        }

        return conn;
    }
}

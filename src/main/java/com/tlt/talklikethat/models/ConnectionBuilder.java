/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.tlt.talklikethat.models;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.Properties;

/**
 *
 * @author KS
 */
public class ConnectionBuilder {

    private static Properties readProperties() {
        Properties prop = new Properties();
        InputStream input = null;

        try {

            input = new FileInputStream("filter-development.properties");
            System.out.println(input);
            // load a properties file
            prop.load(input);

            // get the property value and print it out
//            System.out.println(prop.getProperty("database"));
//            System.out.println(prop.getProperty("dbuser"));
//            System.out.println(prop.getProperty("dbpassword"));
            return prop;
        } catch (IOException ex) {
            ex.printStackTrace();
        } finally {
            if (input != null) {
                try {
                    input.close();
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
        }
        return null;
    }

    public static Connection getConnection() {
        Properties prop = ConnectionBuilder.readProperties();
        Connection conn = null;

        System.out.println(prop.getProperty("db.url"));
        try {
            Class.forName("com.mysql.jdbc.Driver").newInstance();
            //Get a connection
            conn = DriverManager.getConnection("jdbc:mysql://rdsinstance.c0rbj0dyxkze.ap-southeast-1.rds.amazonaws.com:3306/talklikethat_app", "talklikethat_dev", "talklikethat_dev");

        } catch (ClassNotFoundException | InstantiationException | IllegalAccessException | SQLException except) {
            except.printStackTrace();
        }

        return conn;
    }
}

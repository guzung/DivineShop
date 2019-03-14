package com.guzung.divineshop;

public final class Constants {
    public static final String USERNAMES_QUERRY_AUTH = "SELECT * FROM SINFUL_USERS WHERE USERNAME=?";

    public static final Integer SIGN_IN_SUCCESS = 0;
    public static final Integer INCORRECT_MANTRA = 1;
    public static final Integer TOO_SINFUL_USER = 2;

    public static final Integer USER_CREATED = 0;
    public static final Integer USER_EXIST = 1;
    public static final Integer DATE_INCORECTE = 2;
}

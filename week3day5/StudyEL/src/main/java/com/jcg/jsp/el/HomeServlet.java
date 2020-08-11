package com.jcg.jsp.el;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.*;
import java.io.IOException;

@WebServlet("/myHomeServlet")
public class HomeServlet extends HttpServlet {

    private static final long serialVersionUID = 1L;

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        // Setting Some Sample Attributes In The Request Scope
        Person personObj = new Candidate();
        personObj.setName("Harry");
        request.setAttribute("personReqObj", personObj);

        // Setting Some Sample Attributes In The Session Scope
        Candidate candidateObj = new Candidate();
        Address addressObj = new Address();
        addressObj.setAddress("Greece");
        candidateObj.setAddress(addressObj);
        candidateObj.setId(101);
        candidateObj.setName("Java Code Geek");

        HttpSession session = request.getSession();
        session.setAttribute("candidateReqObj", candidateObj);

        // Setting Some Sample Attributes In The Cookie
        Cookie ck = new Cookie("Username.Cookie", "Hi! My Name Is Cookie!");
        response.addCookie(ck);

        // Setting Some Sample Attributes In The Application Scope
        getServletContext().setAttribute("User.Cookie", "Tomcat User");

        RequestDispatcher dispatcherObj = getServletContext().getRequestDispatcher("/home.jsp");
        dispatcherObj.forward(request, response);
    }
}
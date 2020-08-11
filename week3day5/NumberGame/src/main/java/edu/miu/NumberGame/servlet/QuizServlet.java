package edu.miu.NumberGame.servlet;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import edu.miu.NumberGame.domain.Quiz;

@WebServlet("/quiz")
public class QuizServlet extends HttpServlet {

	private static final long serialVersionUID = 1L;

	public QuizServlet() {
		super();
	}

	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		HttpSession s = req.getSession();
		Quiz quiz = new Quiz();
		s.setAttribute("quiz", quiz);
		req.getRequestDispatcher("quiz.jsp").forward(req, resp);
	}

	@Override
	protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		HttpSession s = req.getSession();
		Quiz quiz = (Quiz) s.getAttribute("quiz");
		String answer = req.getParameter("answer");
		boolean error = true;
		if (answer != null) {
			if (quiz.isCorrect(answer)) {
				quiz.scoreAnswer();
				error = false;
			}
		}
		req.setAttribute("error", error);
		s.setAttribute("quiz", quiz);
		if (quiz.getNumCorrect() < 5) {
			req.getRequestDispatcher("quiz.jsp").forward(req, resp);
		} else {
			req.getRequestDispatcher("gameover.jsp").forward(req, resp);
		}

	}

}

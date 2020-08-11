package miu.edu;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Random;

@WebServlet("/random")
public class RandomNumbers extends HttpServlet {
    public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException, ServletException {
        Integer amount=Integer.parseInt(request.getParameter("amount"));
        List<Double> randomNums=new ArrayList<>();

        for(int i=0; i< amount; i++) {
            randomNums.add(Math.random());
        }

        request.setAttribute("randomNumbers", randomNums);
        request.setAttribute("amount", amount);
        request.getRequestDispatcher("random.jsp").forward(request, response);

        /*int amount = Integer.parseInt(request.getParameter("amount"));

        Random random = new Random();
        List<Double> nums = random.doubles().limit(amount).boxed().collect(Collectors.toList());

        request.setAttribute("randoms", nums);
        request.getRequestDispatcher("random.jsp").forward(request, response);
*/

    }
}




package edu.miu.NumberGame.domain;

import java.util.Scanner;

public class Quiz {

    private int score;
    
    private int questionNumber;

    private String[] questions = {
            "3,1,4,1,5",
            "1,1,2,3,5",
            "1,4,9,16,25",
            "2,3,5,7,11",
            "1,2,4,8,16"
    };

    private String[] answers = {"9", "8", "36", "13", "32"};

    public Quiz() {
        this.score = 0;
        this.questionNumber=0;
    }

    public int getCurrentQuestionIndex() {
        return this.questionNumber;
    }
    
    public boolean isCorrect(String answer) {
        if (answer.equals(answers[questionNumber])) return true;
        return false;
    }
    
    public void scoreAnswer() {
    	questionNumber++;
    	score++;
    }
    
    public int getNumQuestions() {
    	return questions.length;
    }

    public String getCurrentQuestion() {
        return questions[questionNumber];
    }
    
    public int getNumCorrect() {
    	return score;
    }

}

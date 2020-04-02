package com.example.suicidepredictionv10;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.ImageView;

import com.google.android.material.floatingactionbutton.FloatingActionButton;

public class AllPatients extends AppCompatActivity {

    ImageView back;
    FloatingActionButton addP;
    Button patient;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_all_patients);

        back = (ImageView)findViewById(R.id.back);
        addP = (FloatingActionButton)findViewById(R.id.addPatients);
        patient = (Button)findViewById(R.id.patient);

        back.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Intent i = new Intent(getBaseContext(),Home.class);
                startActivity(i);
            }
        });
        addP.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Intent i = new Intent(getBaseContext(),AddPatient.class);
                startActivity(i);
            }
        });
        patient.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Intent i = new Intent(getBaseContext(),CustomPatient.class);
                startActivity(i);
            }
        });
    }
}

package com.example.suicidepredictionv10;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.provider.ContactsContract;
import android.view.View;
import android.widget.Button;
import android.widget.ImageView;

import com.google.android.material.floatingactionbutton.FloatingActionButton;

public class CustomPatient extends AppCompatActivity {
    FloatingActionButton addR;
    ImageView back;
    Button recode;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_custom_patient);

        addR = (FloatingActionButton)findViewById(R.id.addRecords);
        back = (ImageView)findViewById(R.id.back);
        recode = (Button)findViewById(R.id.recode);

        addR.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Intent i = new Intent(getBaseContext(),AddRecord.class);
                startActivity(i);
            }
        });

        back.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Intent i = new Intent(getBaseContext(),AllPatients.class);
                startActivity(i);
            }
        });

        recode.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Intent i = new Intent(getBaseContext(), CustomRecode.class);
                startActivity(i);
            }
        });
    }
}

package com.example.suicidepredictionv10;

import androidx.appcompat.app.AppCompatActivity;
import androidx.cardview.widget.CardView;
import androidx.recyclerview.widget.RecyclerView;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.RelativeLayout;

public class Home extends AppCompatActivity implements View.OnClickListener{

    CardView addPatient,viewPatient,addRecode,delete;
    RelativeLayout goSetting;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_home);

        addPatient = (CardView)findViewById(R.id.addPCard);
        viewPatient = (CardView)findViewById(R.id.viewPCard);
        addRecode = (CardView)findViewById(R.id.addRCard);
        delete = (CardView)findViewById(R.id.deleteCard);
        goSetting =(RelativeLayout)findViewById(R.id.goSettings);

        addPatient.setOnClickListener(this);
        viewPatient.setOnClickListener(this);
        addRecode.setOnClickListener(this);
        delete.setOnClickListener(this);
        goSetting.setOnClickListener(this);
    }

    @Override
    public void onClick(View view) {
        Intent i;

        switch (view.getId()){
            case R.id.viewPCard : i = new Intent(this,AllPatients.class);startActivity(i); break;
            case R.id.addPCard : i = new Intent(this,AddPatient.class); startActivity(i);break;
            case R.id.addRCard : i = new Intent(this,AddRecord.class);startActivity(i); break;
            case R.id.deleteCard : i = new Intent(this,Delete.class); startActivity(i);break;
            case R.id.goSettings : i = new Intent(this,Settings.class); startActivity(i);break;
            default: break;
        }

    }
}

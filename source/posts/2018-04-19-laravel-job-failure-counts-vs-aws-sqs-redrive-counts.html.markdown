---

title: Laravel job failure counts vs AWS SQS redrive counts
date: 2018-04-19 03:04 UTC
tags:
image: https://drive.google.com/uc?id=1ioPOjjK3TwRd1TfkJDRNwkRRatYvsPJp
author: Nick
---


I’m running a Laravel 5.4 system that uses a bunch of queues in AWS.

They both have job failure handling but I was concerned with how both of these would handle job failures under different circumstances, so I did a bit of a deep dive.

This is my findings:
AWS and Laravel have separate job failure/redrive systems.

Laravel has the artisan queue:work process that keeps a retry count(in the job), this is determined by how many times the job has run and failed.

AWS has its own process on the cloud side that keeps a retry count, this is determined by how many times the job is placed back on the queue.

If the Laravel count reaches max tries, it shunts the job to the ```failed_jobs``` table.
If the AWS count reaches max tries, it shunts the job to the ```redrive_queue``` set for the job queue.

Whichever happens first wins. However, if both the Laravel and SQS retry counts are equal,  the Laravel job retry=3 and the AWS SQS retry=3.
Laravel wins because it tries it three times before placing it back on the queue for the 3rd AWS failure.

If theres no ```redrive_queue``` set in AWS then Laravel automatically wins and the job goes to the ```failed_jobs table```.

Thats it.  I couldn’t find any other type of resource on this so if this is found in the ocean of the internet, I hope it helps someone.
